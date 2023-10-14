import React ,{useEffect,useState} from 'react'
const PREFIX='chit-talk'

export default function useLocalStorage(key,initialValue){
const prefixedKey=PREFIX+key
const [value,setValue]=useState(()=>{
    const jsonValue=localStorage.getItem(prefixedKey)
    if(jsonValue!=null) return JSON.parse(jsonValue)
    if(typeof initialValue==='function'){
        return initialValue()
    }
    else {
        initialValue
    }
})
useEffect(()=>{
    localStorage.setItem(prefixedKey,JSON.stringify(value))
},[prefixedKey,value])
return [value,setValue]
}