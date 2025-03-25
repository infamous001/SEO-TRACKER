import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function KeywordRow({ keyword, owner, domain,results }) {
    const latestResult=results.reverse()[0]
    const [latestRank,setLatestRank]=useState(latestResult.rank);

    useEffect(()=>{
        setTimeout(checkRank,3000);
    },[latestRank]);

    function checkRank(){
        if(!latestRank){
            axios.get(`/api/results?id=`+latestResult.brightDataResponseId).then(response=>{
                const newRankFromDb=response.data.rank;
                if(newRankFromDb){
                    setLatestRank(newRankFromDb);
                }
                else{
                    setTimeout(checkRank,3000);
                }
                
            });
        }
    }

    return (
        <div className="flex gap-2 bg-white border border-blue-200 border-b-4 p-4 rounded-lg items-center my-3">
            <Link className="font-bold grow block" href={'/domains/'+domain+'/'+encodeURIComponent(keyword)}>{keyword}</Link>
            <div>
                <div className="bg-green-100 w-48 h-[64px]">
                    {!latestRank&&(
                        <div>Checking..</div>
                    )}
                    {latestRank&&(
                        <div>{latestRank}</div>
                    )}
                </div>
            </div>
        </div>
    );
}