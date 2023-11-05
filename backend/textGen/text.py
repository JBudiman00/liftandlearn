from requests import get
from PyPDF2 import PdfReader
from .parse import getBlocks, getParagraphs

def getBlockJSON(pageName, block_size):
        httpRequest = "https://en.wikipedia.org/api/rest_v1/page/html/{}".format(pageName)
        response = get(httpRequest)
        text = response.content.decode("utf-8")
        
        paragraphArray = getParagraphs(text)
        blockArray = getBlocks(paragraphArray, block_size)
        
        return blockArray