import react from "react"
import Link from "next/link"

export default function Page(){
  return(

  <div className="bg-blue-200 min h-screen">

     <ul className="flex justify-center gap-3 text-gray-700 bg-gradient-to-r from-cyan-500 to-blue-50 sticky">
<li>

<Link href={'./'}>Home</Link>
</li>
<li>
  <Link href={'./about'}>About</Link>
</li>
<li>
<Link href = {'./contact'}>Contact</Link>

</li>
    </ul>
   
    <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-center bg-blue-400 shadow-lg rounded-lg p-6 max-w-lg mx-4">
          <span className="text-xl font-bold text-gray-800">
            As a skilled web developer with expertise in HTML, CSS, JavaScript, and Next.js, 
          </span>
          <br />
          <span className="text-gray-600">
            I specialize in crafting responsive, dynamic websites. I focus on delivering clean, efficient code and modern UI/UX experiences tailored to enhance project functionality and user engagement.
          </span>
        </p>
      </div>
    </div>
  );
}