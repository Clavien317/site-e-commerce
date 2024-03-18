import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Achat() {

    const {id} = useParams()
    const [data,setData] = useState([])
    const [input,setInput] = useState([])
    const navig = useNavigate()

    useEffect(()=>
    {
        recup()
    },[])

    const recup = async()=>
    {
        const res = await axios.get(`http://localhost:5000/${id}`)
        setData(res.data.produit)
    }

    const change=(e)=>
    {
        const name = e.target.name;
        const value = e.target.value
        setInput(values=>({...values,[name]:value}))
    }

    const valider =async(e)=>
    {
        e.preventDefault()
        await axios.put(`http://localhost:5000/${id}`,input)
        console.log(input);
        navig("/")
    }
  return (
    <div className='body'>
        {
            data.map((prod,i)=>
            {
                return(
                    <>
                            <form action="" key={i} onSubmit={valider}>
                                <input type="text" onChange={change} name="id" id="" value={id} style={{display:"none"}} />
                                <label htmlFor="">Design</label>
                                <br />
                                <input type="text" onChange={change} name='design' value={prod.design} />
                                <br />
                                <br />

                                <label htmlFor="">Marque</label>
                                <br />
                                <input type="text" onChange={change} name='marque' value={prod.marque} />
                                <br />
                                <br />

                                <label htmlFor="">Description</label>
                                <br />
                                <input type="text" onChange={change} name='description' value={prod.description} />
                                <br />
                                <br />

                                <label htmlFor="">Prix Unitaire</label>
                                <br />
                                <input type="text" onChange={change} name='prix' value={prod.prix} />
                                <br />
                                <br />

                                <label htmlFor="">Effectif a acheter</label>
                                <br />
                                <input type="text" onChange={change} name='eff' />
                                <br />
                                <br />
                                <br />
                                <button>Acheter</button>
                            </form>
                    </>
                )
            })
        }

    </div>
  )
}

export default Achat