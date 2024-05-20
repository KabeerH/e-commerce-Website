import Link from "next/link"

export default function Footer () {
    return (
    <footer>
    <div class="bg-gray-800 py-4 text-gray-400">
      <div class="container px-4 mx-auto">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="my-4 x1:w-1/5">
            <Link href="/" class="block w-56 mb-10">
              <svg version="1.1" viewBox="0 0 3500 700" xmlns="http://www.w3.org/2000/svg">
                    <text fill="white" font-family="Nunito-Bold, Nunito" font-size="512" font-weight="bold">
                      <tspan x="300" y="518">DealDynamo</tspan>
                    </text>
              </svg>
            </Link>
            
            <p class='px-4'>
            Welcome to DealDynamo, your number one destination for all things fashion. We’re dedicated to providing you the very best of clothing, with an emphasis on variety, quality, and affordability.

            Founded in 2024, DealDynamo has come a long way from its beginnings. When we first started out, our passion for fashion drove us to start our own business. We now serve customers all over the world and are thrilled that we’re able to turn our passion into our own website. We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us.
            </p>
          </div>

          <div class="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Pages</h2>
            </div>
            <ul class="leading-8">
              <li><Link href="/" class='hover:text-blue-400'>Home</Link></li>
              <li><Link href="/about" class="hover:text-blue-400">About Me</Link></li>
              <li><Link href="/products" class="hover:text-blue-400">Products</Link></li>
              <li><Link href="/contact" class="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div class="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Additionally Projects</h2>
            </div>
            <ul class="leading-8">
              <li><Link target="_blank" href="https://kabeerharjani.netlify.app/" class="hover:text-blue-400">Personal Website</Link></li>
              <li><Link target='_blank' href="https://github.com/KabeerH/Cloud-Based-Restaurant-Reservation-System" class="hover:text-blue-400">Restaurant Reservation System</Link></li>
              <li><Link target="_blank" href="https://github.com/KabeerH/Personal-Health-Record-PHR-System" class="hover:text-blue-400">PHR System</Link></li>
              <li><Link target="_blank" href="https://github.com/KabeerH/userAPI" class="hover:text-blue-400">User API</Link></li>
            </ul>
          </div>
          <div class="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Me</h2>
            </div>
            <Link href="https://www.linkedin.com/in/kabeer-harjani-b3b124248/" target="_blank" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </Link>
            <Link href="https://github.com/KabeerH" target="_blank" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-indigo-700 py-4 text-gray-100">
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 w-full text-center sm:w-auto sm:text-left">
            Copyright © 2024. 
            All Rights Reserved.
          </div>
          <div class="px-4 w-full text-center sm:w-auto sm:text-left">
            Made with ❤️ by Kabeer Harjani.
          </div>
        </div>
      </div>
    </div>
  </footer>
    )
}