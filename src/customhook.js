import react,{useState} from "react"


export function useCostom() {


    const [state, setstate] = useState(0)

     function inre() {

        setstate(state+1)
         
     }


     function decri() {

        setstate(state-1)
         
     }


     function sanan(params) {



        console.log(params)
         
     }

     return({
         state,
         decri,
         inre,
         sanan
     })

    
}