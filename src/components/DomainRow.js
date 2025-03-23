import React from 'react';

export default function DomainRow({owner,domain,icon}) {
  const keywords = ['github', 'git', 'source code','rohit','jindal',];
  return (
    <div className="flex items-center gap-14 bg-white border border-blue-200 border-b-4 p-4 rounded-lg my-4">
      <div className="flex items-center gap-2">
      <img src={icon} className="h-12" />
      <div>
        <h2 className="font-bold text-xl leading-4">{domain}</h2>
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="text-xs text-gray-500 bg-slate-100 rounded-md p-1 mt-1 mr-1 mb-1 inline-block"
          >
            {keyword}
          </span>
        ))}
      </div>
      </div>
      <div>
        <div className="bg-green-100 w-36 h-24"></div>
      </div>
    </div>
  );
}
