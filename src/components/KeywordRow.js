import Link from "next/link";

export default function KeywordRow({ keyword, owner, domain }) {
    return (
        <div className="flex gap-2 bg-white border border-blue-200 border-b-4 p-4 rounded-lg items-center my-3">
            <Link className="font-bold grow block" href={'/domains/'+domain+'/'+encodeURIComponent(keyword)}>{keyword}</Link>
            <div>
                <div className="bg-green-100 w-48 h-[64px]"></div>
            </div>
        </div>
    );
}