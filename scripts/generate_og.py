import struct
import zlib
import math
import os

def create_og_image():
    W = 1200
    H = 630

    # Ensure avatar bmp exists
    os.system("sips -s format bmp --resampleWidth 360 public/images/profile/profile_avatar.png --out scripts/temp_avatar.bmp 2>/dev/null")

    # Read avatar bmp
    avatar_pixels = None
    av_w = 0
    av_h = 0
    if os.path.exists("scripts/temp_avatar.bmp"):
        try:
            with open("scripts/temp_avatar.bmp", "rb") as f:
                header = f.read(54)
                av_w = struct.unpack('<I', header[18:22])[0]
                av_h = abs(struct.unpack('<i', header[22:26])[0])
                raw_bytes = f.read()
                # Row size is padded to multiple of 4
                row_padding = (4 - (av_w * 3) % 4) % 4
                row_stride = av_w * 3 + row_padding
                avatar_pixels = []
                for y in range(av_h):
                    row = []
                    y_idx = y if struct.unpack('<i', header[22:26])[0] < 0 else (av_h - 1 - y)
                    offset = y_idx * row_stride
                    for x in range(av_w):
                        b = raw_bytes[offset + x*3]
                        g = raw_bytes[offset + x*3 + 1]
                        r = raw_bytes[offset + x*3 + 2]
                        row.append((r, g, b))
                    avatar_pixels.append(row)
        except Exception as e:
            print("Avatar parse exception:", e)

    # 8x12 minimal font for clean pixel rendering of text
    FONT_8x12 = {
        'A': ["  ##  "," #  # ","#    #","######","#    #","#    #","#    #"],
        'B': ["##### ","#    #","##### ","#    #","#    #","##### "],
        'C': [" #### ","#    #","#     ","#     ","#    #"," #### "],
        'D': ["##### ","#    #","#    #","#    #","#    #","##### "],
        'E': ["######","#     ","##### ","#     ","#     ","######"],
        'F': ["######","#     ","##### ","#     ","#     ","#     "],
        'G': [" #### ","#    #","#     ","#  ###","#    #"," #### "],
        'H': ["#    #","#    #","######","#    #","#    #","#    #"],
        'I': ["######","  ##  ","  ##  ","  ##  ","  ##  ","######"],
        'J': ["  ####","    ##","    ##","    ##","#   ##"," #### "],
        'K': ["#    #","#   # ","####  ","#   # ","#    #","#    #"],
        'L': ["#     ","#     ","#     ","#     ","#     ","######"],
        'M': ["#    #","##  ##","# ## #","#    #","#    #","#    #"],
        'N': ["#    #","##   #","# #  #","#  # #","#   ##","#    #"],
        'O': [" #### ","#    #","#    #","#    #","#    #"," #### "],
        'P': ["##### ","#    #","##### ","#     ","#     ","#     "],
        'Q': [" #### ","#    #","#    #","#  # #","#   ##"," #### "],
        'R': ["##### ","#    #","##### ","#   # ","#    #","#    #"],
        'S': [" #### ","#     "," #### ","    ##","    ##"," #### "],
        'T': ["######","  ##  ","  ##  ","  ##  ","  ##  ","  ##  "],
        'U': ["#    #","#    #","#    #","#    #","#    #"," #### "],
        'V': ["#    #","#    #","#    #"," #  # "," #  # ","  ##  "],
        'W': ["#    #","#    #","# ## #","# ## #","##  ##","#    #"],
        'X': ["#    #"," #  # ","  ##  ","  ##  "," #  # ","#    #"],
        'Y': ["#    #"," #  # ","  ##  ","  ##  ","  ##  ","  ##  "],
        'Z': ["######","   ## ","  ##  "," ##   ","##    ","######"],
        ' ': ["      ","      ","      ","      ","      ","      "],
        '.': ["      ","      ","      ","      ","  ##  ","  ##  "],
        ',': ["      ","      ","      ","      ","  ##  ","  #   "],
        '|': ["  ##  ","  ##  ","  ##  ","  ##  ","  ##  ","  ##  "],
        '-': ["      ","      ","######","      ","      ","      "],
        '/': ["    # ","   #  ","  #   "," #    ","#     ","      "],
        '&': ["  #   "," # #  ","  #   "," # # #","#   # "," ### #"],
        '•': ["      ","  ##  "," #### "," #### ","  ##  ","      "],
        '0': [" #### ","#   ##","#  # #","# #  #","##   #"," #### "],
        '1': ["  ##  "," ###  ","  ##  ","  ##  ","  ##  ","######"],
        '2': [" #### ","#    #","   ## ","  ##  "," ##   ","######"],
        '3': ["##### ","    ##","  ### ","    ##","#   ##"," #### "],
        '4': ["   ## ","  ### "," # ## ","######","   ## ","   ## "],
        '5': ["######","#     ","##### ","    ##","#   ##"," #### "],
        '6': [" #### ","#     ","##### ","#    #","#    #"," #### "],
        '7': ["######","    ##","   ## ","  ##  ","  ##  ","  ##  "],
        '8': [" #### ","#    #"," #### ","#    #","#    #"," #### "],
        '9': [" #### ","#    #","######","    ##","    ##"," #### "]
    }

    # Initialize frame buffer: list of rows of (R, G, B)
    fb = []
    for y in range(H):
        row = []
        ny = y / float(H)
        for x in range(W):
            nx = x / float(W)
            
            # Base dark violet/obsidian theme
            base_r = int(14 + 8 * (1.0 - ny))
            base_g = int(12 + 8 * (1.0 - ny))
            base_b = int(22 + 18 * (1.0 - ny))

            # Ambient violet glowing blob at top-right (behind avatar)
            dist_avatar_glow = math.sqrt((nx - 0.78)**2 + (ny - 0.5)**2)
            glow1 = max(0.0, 1.0 - dist_avatar_glow / 0.55) ** 1.8
            base_r += int(167 * glow1 * 0.45)
            base_g += int(139 * glow1 * 0.35)
            base_b += int(250 * glow1 * 0.7)

            # Soft pink ambient blob at bottom-left
            dist_pink_glow = math.sqrt((nx - 0.25)**2 + (ny - 0.75)**2)
            glow2 = max(0.0, 1.0 - dist_pink_glow / 0.5) ** 2.0
            base_r += int(243 * glow2 * 0.3)
            base_g += int(166 * glow2 * 0.2)
            base_b += int(200 * glow2 * 0.3)

            # Subtle grid dots
            if (x % 40 == 0) and (y % 40 == 0):
                base_r = min(255, base_r + 25)
                base_g = min(255, base_g + 25)
                base_b = min(255, base_b + 40)

            row.append([min(255, base_r), min(255, base_g), min(255, base_b)])
        fb.append(row)

    # Blend Avatar Circle at cx=920, cy=315, radius=160
    acx = 920
    acy = 315
    ar = 160
    if avatar_pixels and av_w > 0 and av_h > 0:
        for dy in range(-ar - 10, ar + 10):
            for dx in range(-ar - 10, ar + 10):
                px = acx + dx
                py = acy + dy
                if 0 <= px < W and 0 <= py < H:
                    dist = math.sqrt(dx*dx + dy*dy)
                    if dist <= ar:
                        # Map to avatar_pixels
                        u = (dx + ar) / (2.0 * ar)
                        v = (dy + ar) / (2.0 * ar)
                        src_x = min(av_w - 1, max(0, int(u * av_w)))
                        src_y = min(av_h - 1, max(0, int(v * av_h)))
                        pr, pg, pb = avatar_pixels[src_y][src_x]
                        
                        # Soft circular edge antialiasing
                        if dist > ar - 2:
                            edge = (ar - dist) / 2.0
                            fb[py][px][0] = int(pr * edge + fb[py][px][0] * (1 - edge))
                            fb[py][px][1] = int(pg * edge + fb[py][px][1] * (1 - edge))
                            fb[py][px][2] = int(pb * edge + fb[py][px][2] * (1 - edge))
                        else:
                            fb[py][px] = [pr, pg, pb]
                    elif dist <= ar + 4:
                        # Sleek glowing border ring
                        ring_alpha = 1.0 - (dist - ar) / 4.0
                        fb[py][px][0] = min(255, int(fb[py][px][0] + 167 * ring_alpha))
                        fb[py][px][1] = min(255, int(fb[py][px][1] + 139 * ring_alpha))
                        fb[py][px][2] = min(255, int(fb[py][px][2] + 250 * ring_alpha))

    # Helper function to render text onto frame buffer
    def draw_text(text, start_x, start_y, scale, color):
        cur_x = start_x
        for char in text.upper():
            glyph = FONT_8x12.get(char, FONT_8x12[' '])
            gh = len(glyph)
            gw = len(glyph[0])
            for gy in range(gh):
                for gx in range(gw):
                    if glyph[gy][gx] == '#':
                        for sy in range(scale):
                            for sx in range(scale):
                                px = cur_x + gx * scale + sx
                                py = start_y + gy * scale + sy
                                if 0 <= px < W and 0 <= py < H:
                                    fb[py][px] = list(color)
            cur_x += (gw + 2) * scale

    # Helper function to draw rounded badge
    def draw_badge(bx, by, bw, bh, bg_color, border_color):
        for y in range(by, by + bh):
            for x in range(bx, bx + bw):
                if 0 <= x < W and 0 <= y < H:
                    # check corners
                    is_border = (x == bx or x == bx + bw - 1 or y == by or y == by + bh - 1)
                    if is_border:
                        fb[y][x] = list(border_color)
                    else:
                        fb[y][x][0] = int(fb[y][x][0] * 0.3 + bg_color[0] * 0.7)
                        fb[y][x][1] = int(fb[y][x][1] * 0.3 + bg_color[1] * 0.7)
                        fb[y][x][2] = int(fb[y][x][2] * 0.3 + bg_color[2] * 0.7)

    # Render Glass Card backing for left text
    card_x = 70
    card_y = 75
    card_w = 640
    card_h = 480
    for cy in range(card_y, card_y + card_h):
        for cx in range(card_x, card_x + card_w):
            if 0 <= cx < W and 0 <= cy < H:
                # Glass fill
                fb[cy][cx][0] = min(255, int(fb[cy][cx][0] * 0.75 + 35 * 0.25))
                fb[cy][cx][1] = min(255, int(fb[cy][cx][1] * 0.75 + 32 * 0.25))
                fb[cy][cx][2] = min(255, int(fb[cy][cx][2] * 0.75 + 55 * 0.25))
                # Delicate glass border
                if cx == card_x or cx == card_x + card_w - 1 or cy == card_y or cy == card_y + card_h - 1:
                    fb[cy][cx] = [90, 80, 130]

    # Status pill: "AVAILABLE FOR WORK"
    draw_badge(110, 115, 230, 36, (20, 50, 40), (16, 185, 129))
    draw_text("AVAILABLE FOR WORK", 124, 126, 2, (16, 185, 129))

    # Name: "AVANEESH KUMAR"
    draw_text("AVANEESH KUMAR", 110, 185, 7, (255, 255, 255))

    # Title: "FULL STACK DEVELOPER"
    draw_text("FULL STACK DEVELOPER", 110, 260, 4, (167, 139, 250))
    # Subtitle: "& AI PRODUCT BUILDER"
    draw_text("& AI PRODUCT BUILDER", 110, 305, 3, (243, 166, 200))

    # Education / Alma mater
    draw_text("MCA GRADUATE  |  HBTU KANPUR", 110, 370, 2, (180, 180, 195))

    # Tech Badges: React, Next.js, Node.js, Express, MongoDB, GenAI
    badges = ["REACT", "NEXT.JS", "NODE.JS", "PYTHON", "GENAI", "MONGODB"]
    cur_bx = 110
    for b in badges:
        bw = len(b) * 8 * 2 + 24
        draw_badge(cur_bx, 445, bw, 36, (40, 35, 60), (167, 139, 250))
        draw_text(b, cur_bx + 12, 456, 2, (230, 230, 250))
        cur_bx += bw + 14

    # Write uncompressed BMP file
    bmp_filename = "scripts/temp_og.bmp"
    # Row size padded to multiple of 4
    row_pad = (4 - (W * 3) % 4) % 4
    image_size = (W * 3 + row_pad) * H
    file_size = 54 + image_size

    with open(bmp_filename, "wb") as f:
        # BMP Header
        f.write(b'BM')
        f.write(struct.pack('<IHHI', file_size, 0, 0, 54))
        # DIB Header (BITMAPINFOHEADER)
        f.write(struct.pack('<IIiHHIIIIII', 40, W, -H, 1, 24, 0, image_size, 2835, 2835, 0, 0))
        # Pixels (top-to-bottom because height is negative)
        for y in range(H):
            row_bytes = bytearray()
            for x in range(W):
                r, g, b = fb[y][x]
                row_bytes.extend((b, g, r)) # BMP is BGR
            row_bytes.extend(b'\x00' * row_pad)
            f.write(row_bytes)

    # Convert to PNG using sips
    os.system(f"sips -s format png {bmp_filename} --out public/og-image.png 2>/dev/null")
    if os.path.exists(bmp_filename):
        os.remove(bmp_filename)
    if os.path.exists("scripts/temp_avatar.bmp"):
        os.remove("scripts/temp_avatar.bmp")
    print("Successfully created public/og-image.png")

if __name__ == "__main__":
    create_og_image()
