class Paragraph():
    def __init__(self, section, header, text):
        self.section = section
        self.header = header
        self.text = text
    def __str__(self):
        return '{{"section":"{s}","header":"{h}","text":"{t}"}}'.format(s=self.section, h=self.header, t=self.text)
        
def getParagraphs(text):
    text.replace("\\n", "")
    
    inSHP = False
    inTag = False

    currentText = []
    parArray = []
    section = "Introduction"
    header = ""
    paragraph = ""

    #Get rid of everything in tags
    for i in range(2, len(text)):
        #Figure out if within a tag
        if text[i] == ">":
            inTag = False
            continue
        elif text[i - 2: i + 1] == "<h2":
            inTag = True
            inSHP = True
        elif text[i: i+4] == "</h2":
            inTag = True
            inSHP = False
            
            section = ''.join(currentText)
            header = ""
            currentText = []
        elif text[i - 2: i + 1] == "<h3":
            inTag = True
            inSHP = True
        elif text[i: i+4] == "</h3":
            inTag = True
            inSHP = False
            
            header = ''.join(currentText)
            currentText = []
        elif text[i - 1: i + 1] == "<p":
            inTag = True
            inSHP = True
        elif text[i: i+3] == "</p":
            inTag = True
            inSHP = False
            
            #Append to array here
            parText = ''.join(currentText)
            currentText = []
            
            pg = Paragraph(section, header, parText)
            parArray.append(pg)
            
        elif text[i] == "<":
            inTag = True
            
            
        if inSHP and not inTag:
            currentText.append(text[i])
        
    parArray.pop(0)
    return parArray
      
def getBlocks(paragraphs, maxLength):
    currentLength = 0
    blocks = []
    currentBlock = []
    for paragraph in paragraphs:
        length = len(paragraph.text)
        if currentLength + length <= maxLength:
            currentBlock.append(paragraph.__str__())
            currentLength += length
        else:
            if len(currentBlock) == 0:
                blocks.append([paragraph.__str__()])
            else:
                blocks.append(currentBlock)
            currentLength = 0
            currentBlock = []
    
    #Ensure that the last paragraphs are added
    if len(currentBlock) >= 1:
        blocks.append(currentBlock)
    return blocks
        
    
    
    