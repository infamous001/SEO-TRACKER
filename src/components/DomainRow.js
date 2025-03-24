import React from 'react';
import Link from 'next/link';

export default function DomainRow({owner,domain,icon,keywords}) {
  
  return (
    <div className="flex items-center gap-14 bg-white border border-blue-200 border-b-4 p-4 rounded-lg my-4">
      <div className="flex items-center gap-2">
        
      {icon &&(
        <img src={icon} className="h-12"/>
      )}
      <div>
        <Link href={`/domains/${domain}`} className="font-bold text-xl leading-4 block">{domain}</Link>
        {keywords.map(keywordDoc=> (
          <Link 
          href={'/domains/'+domain+'/'+keywordDoc.keyword}
          className="text-xs text-gray-500 bg-slate-100 rounded-md p-1 mt-1 mr-1 mb-1 inline-block">
            {keywordDoc.keyword}
          </Link>
        ))}
      </div>
      </div>
      <div>
        <div className="bg-green-100 w-36 h-24"></div>
      </div>
    </div>
  );
}
