"use client";
import Navbar from "@/components/navbar";
import LoadingSpinner from "@/components/ring";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.APIKEY;
  console.log(apiKey)

  const [data, setData] = useState(null);
  const [inputText, setinputText] = useState(null);
  const fetchData = async () => {
    console.log("fetching data");
    setLoading(true);
    try {
      if (inputText) {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        };

        const payload = {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `1. To Kill a Mockingbird by Harper Lee
  2. 1984 by George Orwell
  3. The Great Gatsby by F. Scott Fitzgerald
  4. Pride and Prejudice by Jane Austen
  5. The Catcher in the Rye by J.D. Salinger
  6. The Hobbit by J.R.R. Tolkien
  7. The Da Vinci Code by Dan Brown
  8. The Alchemist by Paulo Coelho
  9. The Girl with the Dragon Tattoo by Stieg Larsson
  10. The Hunger Games by Suzanne Collins
  11. Sapiens: A Brief History of Humankind by Yuval Noah Harari
  12. The Lord of the Rings by J.R.R. Tolkien
  13. The Chronicles of Narnia by C.S. Lewis
  14. The Color Purple by Alice Walker
  15. A Game of Thrones by George R.R. Martin
  16. Gone Girl by Gillian Flynn
  17. The Fault in Our Stars by John Green
  18. Brave New World by Aldous Huxley
  19. The Silent Patient by Alex Michaelides
  20. Educated by Tara Westover
  
  Reply short and precise. 
  Respond as "Can't use that function" if I use "buy" 
  . 
  
  Respond as "Book rented" if I use "rent"
  
  Sort the books if I say so 
  
  Remove rented books from the list. 
  
  Respond "Book received" If I use "return"
  
  Add book to the list when received
  
  Show prices of the books when I ask the price never fail to do so and set any random value for the books

  Say about any books in the list if asked for recommendation`,
            },

            {
              role: "user",
              content: inputText,
            },
          ],
          max_tokens: 600,
        };

        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers,
            body: JSON.stringify(payload),
          }
        );

        const responseData = await response.json();
        setData(responseData.choices[0].message.content);
        console.log(responseData.choices[0].message.content);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      window.alert("Sorry we faced some issue. Please retry")
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.value;
    if (file) {
      setinputText(file);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gradient-to-r from-[#FFF4F4] to-transparent flex flex-row place-content-around w-screen l py-[50px]">
        <img src="/assets/coverimg.jpg" className="image"></img>
        <div className="w-[508px] h-[570px] bg-[#F4F9FF] rounded-3xl border border-[#cac7a4]">
          <div className="h-full w-full flex flex-col gap-[90px] items-center pt-[100px]">
            <h2 className="text-center itim text-[#000000] text-[34px]">
              How may i help you
            </h2>
            <input
              type="text"
              className="h-[50px] w-[410px] bg-white rounded-2xl flex items-center justify-center text-center"
              id="inputimg"
              placeholder="Enter text here"
              onChange={handleFileChange}
            ></input>
            <button
              className="text-center bg-[#cac7a4] w-[406px] h-[46px] flex items-center justify-center rounded-md"
              onClick={fetchData}
            >
              Generate Response
            </button>
          </div>
        </div>
        <div className="w-[508px] min-h-[570px] py-[40px] px-[5px] bg-[#F4F9FF] rounded-3xl border border-[#cac7a4]">
          {loading ? (
            <LoadingSpinner></LoadingSpinner>
          ) : (
            <p className="flex flex-row justify-center items-center text-center">
              {data}
            </p>
          )}{" "}
        </div>
      </div>
    </>
  );
}
