import React from 'react'
import { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
const Recipe = () => {
    const [detail,setDetail]=useState({})
    const[activeTab,setactiveTab]=useState('Instructions');

    let param=useParams();
    
    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/${param.name}/information?apiKey=${process.env.Api_key}`)
        .then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data);
            if(data){
                setDetail(data)
            }
        })
    },[param.name])

  return (
    <DetailWrapper>
       <div>
         <h2>{detail.title}</h2>
         <Image src={detail.image}></Image>
       </div>
       <Info>
         <Button  className={activeTab==='Instructions' ? 'active' :''} onClick={()=>{setactiveTab("Instructions")}}>Instructions</Button>
         <Button className={activeTab==='Ingredients' ? 'active' :''}   onClick={()=>{setactiveTab("Ingredients")}}>Ingredients</Button>

         {activeTab==='Instructions' && (

         <div>
          <h3 dangerouslySetInnerHTML={{__html:detail.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html:detail.instructions}}></h3>
         </div>
         )}

         {activeTab==='Ingredients' && (

          <ul>
            {detail.extendedIngredients.map((item)=>{
              return <li key={item.id}>{item.original}</li>
            })}
          </ul>
         )}
          
       </Info>


    </DetailWrapper>
  )
}

const DetailWrapper=styled.div`
  margin-top: 5rem ;
  margin-bottom: 5rem ;
  display: flex;
  
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    
  }
  h2{
      margin-bottom:1rem;
  }
  li{
    font-size:1.2rem;
    line-height:2.5rem; 
  }
  ul{
    margin-top:2rem;

  }
  
`;

const Image=styled.img`
  width: 400px;
`


const Button=styled.button`
  padding:1rem 2rem;
  width:10rem;
  height:3rem;
  color: #313131;
  background:white;
  border: 2px solid black;
  text-align:center; 
`
const Info=styled.div`
  margin-left: 3rem;
  padding-right:2px;
  
`

export default Recipe
