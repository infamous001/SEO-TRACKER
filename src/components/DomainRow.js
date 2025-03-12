export default function DomainRow() {
    const keywords=['github','git','source code']
    return (
      <div className="flex items-center gap-2 bg-white border border-blue-200 border-b-4 p-4 rounded-lg my-4">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="h-12" />
        <div>
          <h2 className="font-bold text-xl leading-4">Github.com</h2>
          {keywords.map(keyword => (
            <>
              <span className="text-xs text-gray-500 bg-slate-100 rounded-md p-1 mt-1 inline-block">
                {keyword}
              </span>{' '}
            </>
          ))}
        </div>
        <div>
            <div className="bg-green-100 w-36 h-24"></div>
        </div>
      </div>
    );
  }