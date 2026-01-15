import React,{useState} from "react"

const existingWordsDict=['apple','Applee','mango','banana','pineapple']
const useInputSearch=()=>{
     const [word,setWord]=useState("");
     const [searchedWords,setSearchedWords]=useState([])

     const handleChange = (e) => {
      const value = e.target.value;    
      setWord(value);

      if (!value.trim()) {             
        setSearchedWords([]);
        return;
      }

      setSearchedWords(
        existingWordsDict.filter((existingWord) => {
          return existingWord.toLowerCase().includes(value.toLowerCase());  // ✅ use value, not word
        })
      );
    };


  return {word,searchedWords,handleChange}
}
const InputWord=({ word,handleChange})=>{
 return(
    <input 
      type="text"
      name="word"
      id="word"
      value={word}
      onChange={handleChange}
      placeholder="Type to search..."
      />
 )
 
}

const InputMatchingWords=({searchedWords
})=>{
  if (!searchedWords.length) return null;
  return(
    <div>
      <ul>
        {
          searchedWords.map((w,index)=>{
            return <li key={index}>{w} </li>
          })
        }
      </ul>
    </div>
  )
}

export default function App(){
  const {word,searchedWords,handleChange}=useInputSearch()

  return (
    <div>
      <InputWord  word={ word} handleChange={handleChange}/>
      <InputMatchingWords searchedWords={searchedWords}
      />
    </div>
  )
}
