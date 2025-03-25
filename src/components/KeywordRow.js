import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Chart from "./Chart";



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
        <div className="flex gap-2 bg-white border border-blue-200 border-b-4 p-4 pr-0 rounded-lg items-center my-3">
            <Link className="font-bold grow block" href={'/domains/'+domain+'/'+encodeURIComponent(keyword)}>{keyword}</Link>
            <div>
                <div className="h-[64px] w-[300px]">
                    {!latestRank&&(
                        <div>Checking...</div>
                    )}
                    {latestRank&&(
                        <div>
                            <Chart results={results} width={300}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}