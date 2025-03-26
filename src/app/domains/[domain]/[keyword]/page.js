'use client';
import DeleteButton from "@/components/DeleteButton";
import DoubleHeader from "@/components/DoubleHeader";
import { useParams ,redirect} from "next/navigation"
import Swal from 'sweetalert2'
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';
import { useState,useEffect } from "react";
import Chart from "@/components/Chart";
const MySwal=withReactContent(Swal);

export default function keywordPage(props){
    const params=useParams()
    const keyword=decodeURIComponent(params.keyword);
    const domain=params.domain;
    const [results,setResults] = useState([]);
    useEffect(() => {
      axios.get('/api/keywords?keyword='+keyword+'&domain='+domain)
        .then(response => setResults(response.data.results));
    }, []);

    function deleteKeyword(){
        axios.delete('/api/keywords?domain='+domain+'&keyword='+keyword).then(()=>{
            redirect('/domains/'+domain);
        });
    }
    
    function showDeletePopup(){
        MySwal.fire({
            title: 'Delete?',
            text: 'Are you sure you want to delete this keyword?',
            icon: 'warning',
            confirmButtonText:'Delete',
            cancelButtonText:'Cancel',
            showCancelButton: true,
            showCloseButton:true,
            confirmButtonColor: '#f00',
            cancelButtonColor: '#3085d6',
          }).then((result) => {
            if (result.isConfirmed) {
              deleteKeyword();
              // Call your delete function here
            }
          });
    }
    return (
        <div>
            <div className='flex items-end mb-8'>
                    <DoubleHeader preTitle={domain} mainTitle={keyword} />
                    <div className='p-2'>
                        <DeleteButton onClick={showDeletePopup}/>
                    </div>
            </div>
            {results.length>0&&(
            <div>
                <Chart width={'100%'} results={results}/>
            </div>
            )}
        </div>
    )
    
}


