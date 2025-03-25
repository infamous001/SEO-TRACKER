'use client';
import { redirect, useParams } from 'next/navigation';
import DoubleHeader from "@/components/DoubleHeader";
import NewKeywordForm from "@/components/NewKeywordForm";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Keyword } from '@/models/Keyword';
import KeywordRow from '@/components/KeywordRow';
import DeleteButton from '@/components/DeleteButton';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const MySwal=withReactContent(Swal);

export default function DomainPage(props) {
    const params = useParams(); // Unwrapping the params using useParams()
    const domain = params.domain;
    const [keywords,setKeywords]=useState([]);
    const[loading,setLoading]=useState(false)
    const [results,setResults]=useState([]);
    const[showDelete,setShowDelete]=useState(false);
    useEffect(()=>{
        fetchKeywords()
    },[]);

    function fetchKeywords(){
        setLoading(true);
        axios.get('/api/keywords?domain='+domain).then(response=>{
            setKeywords(response.data.keywords);
            setResults(response.data.results);
            setLoading(false);
        });
    }
    function deleteDomain(){
        axios.delete('/api/domains?domain='+domain).then(()=>{
            redirect('/');
        });
    }

    function showDeletePopup(){
        MySwal.fire({
            title: 'Delete?',
            text: 'Are you sure you want to delete this domain?',
            icon: 'warning',
            confirmButtonText:'Delete',
            cancelButtonText:'Cancel',
            showCancelButton: true,
            showCloseButton:true,
            confirmButtonColor: '#f00',
            cancelButtonColor: '#3085d6',
          }).then((result) => {
            if (result.isConfirmed) {
              deleteDomain();
              // Call your delete function here
            }
          });
    }
    return (
        <div>
            <div className='flex items-end'>
                <DoubleHeader preTitle={"Domains ..."} mainTitle={domain} />
                <div className='p-2'>
                    <DeleteButton onClick={showDeletePopup}/>
                </div>
            </div>
            <NewKeywordForm domain={domain} onNew={fetchKeywords} />
            {loading && (
                <div>loading...</div>
            )}
            {!loading && keywords.map(keywordDoc=>(
                <KeywordRow {...keywordDoc} results={results.filter(r=>r.keyword===keywordDoc.keyword)}/>
            ))}
        </div>
    )
}
