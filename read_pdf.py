import sys
try:
    from pypdf import PdfReader
    reader = PdfReader("the branding method (carolina kairos) (Z-Library).pdf")
    text = ""
    for page in reader.pages:
        extracted = page.extract_text()
        if extracted:
            text += extracted + "\n"
    with open("book_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("PDF successfully parsed, length: " + str(len(text)))
except Exception as e:
    print("Error:", e)
