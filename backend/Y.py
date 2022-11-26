from PIL import Image
image = Image.open('demo_image.jpg')
print(image.format) # Output: JPEG

# The pixel format used by the image. Typical values are "1", "L", "RGB", or "CMYK."
print(image.mode) # Output: RGB

# Image size, in pixels. The size is given as a 2-tuple (width, height).
print(image.size) # Output: (1920, 1280)

# Colour palette table, if any.
print(image.palette) # Output: None
new_image = image.resize((1000, 1000))
new_image.save('image_400.jpg')

print(image.size) # Output: (1920, 1280)
print(new_image.size) # Output: (400, 400)