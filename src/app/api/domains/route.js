import { authOptions } from "../auth/[...nextauth]/route";
import { Domain } from "@/models/Domain";
import { Keyword } from "@/models/Keyword";
import { Result } from "@/models/Result";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import axios from "axios";
import { JSDOM } from "jsdom";  // Import from jsdom

async function getIconUrl(domain) {
    try {
        const response = await axios.get(`https://${domain}`);
        const dom = new JSDOM(response.data);
        const document = dom.window.document;

        const links = document.querySelectorAll('link[rel*="icon"]');  // Select all possible icons

        for (const link of links) {
            const href = link.getAttribute('href');
            if (href) {
                if (href.startsWith('http')) {
                    return href;  // Absolute URL
                } else {
                    return `https://${domain}${href.startsWith('/') ? '' : '/'}${href}`;  // Relative URL
                }
            }
        }
    } catch (e) {
        console.error("Error fetching icon:", e.message);
    }
    return null;  // Return null if no icon is found or an error occurs
}
  
export async function POST(req) {
    const data = await req.json();
    console.log(data);

    await mongoose.connect(process.env.MONGODB_URI);
    const session = await getServerSession(authOptions);

    let icon = null;
    if (data?.domain) {
        icon = await getIconUrl(data.domain);
    }

    const doc = await Domain.create({
        domain: data.domain,
        owner: session?.user?.email,
        icon,
    });
    
    return Response.json(doc);
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URI);
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const domains = await Domain.find({ owner: email });
    const keywords = await Keyword.find({ 
        owner: email, 
        domain: domains.map(doc=>doc.domain),
    });
    const results=await Result.find({
      domain:domains.map(doc => doc.domain),
      keyword:keywords.map(doc=>doc.keyword)
    });
    return Response.json({domains,keywords,results});
}

export async function DELETE(req){
    await mongoose.connect(process.env.MONGODB_URI);
    const url=new URL(req.url);
    const domain=url.searchParams.get('domain');
    const session = await getServerSession(authOptions);
    await Domain.deleteOne({owner:session.user?.email,domain:domain});
    return Response.json(true);
}