'use client';
import DomainRow from "@/components/DomainRow";
import DoubleHeader from "@/components/DoubleHeader";


export default function DomainsList({domains}){
    
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