'use client';
import DomainRow from "@/components/DomainRow";
import DoubleHeader from "@/components/DoubleHeader";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DomainsList(){
    const [domains,setDomains]=useState([]);
    useEffect(()=>{
        axios.get('/api/domains').then(res=>{
            setDomains(res.data);
        });
    },[]);
    return(
        <div>
            <DoubleHeader preTitle={'Your domains'} mainTitle={`${domains.length} Domains`} />
            {domains.map(domain => (
                // <DomainRow domain={domain.domain} owner={domain.owner} icon={domain.icon} />
                <DomainRow {...domain}/>
            ))}
        </div>
    )
}