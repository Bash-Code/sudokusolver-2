from PIL import Image

def checkSize(path,size):

    image = Image.open(path)
    # Image size, in pixels. The size is given as a 2-tuple (width, height).
    if image.size >= size: return True
    else: return False

def resizeImage(path,size):
    # Colour palette table, if any.
    image = Image.open(path)
    new_image = image.resize(size)
    new_image.save("Temp/resized.png")
    return new_image