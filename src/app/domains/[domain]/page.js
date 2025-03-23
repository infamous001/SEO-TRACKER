'use client';
import { useParams } from 'next/navigation';
import DoubleHeader from "@/components/DoubleHeader";
import NewKeywordForm from "@/components/NewKeywordForm";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Keyword } from '@/models/Keyword';
import KeywordRow from '@/components/KeywordRow';
import DeleteButton from '@/components/DeleteButton';

export default function DomainPage(props) {
    const params = useParams(); // Unwrapping the params using useParams()
    const domain = params.domain;
    const [keywords,setKeywords]=useState([]);
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        fetchKeywords()
    },[]);

    function fetchKeywords(){
        setLoading(true);
        axios.get('/api/keywords?domain='+domain).then(response=>{
            setKeywords(response.data);
            setLoading(false);
        });
    }
    return (
        <div>
            <div className='flex items-end'>
                <DoubleHeader preTitle={"Domains ..."} mainTitle={domain} />
                <div className='p-2'>
                    <DeleteButton/>
                </div>
            </div>
            <NewKeywordForm domain={domain} onNew={fetchKeywords} />
            {loading && (
                <div>loading...</div>
            )}
            {!loading && keywords.map(keyword=>(
                <KeywordRow {...keyword}/>
            ))}
        </div>
    )
}
