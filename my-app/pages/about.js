import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function About () {
    return ( 
        <>
        <section class="bg-gray-100">
            <div class="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div class="max-w-lg">
                        <h2 class="text-4xl font-extrabold text-gray-900">About Me</h2>
                        <p class="mt-12 mb-24 text-gray-600 text-lg">Hello! My name is Kabeer Harjani and I am a third year student at
                         <Link href="https://www.senecapolytechnic.ca/home.html" className={styles.linkColor} target="_blank"> Seneca Polytechnic</Link> pursing a Bachelor of Technology - Software Development (BTech). I am strongly passionate about Web Development and find making different websites and learning enjoyable.   </p>
                         <p class="mt-12 mb-24 text-gray-600 text-lg">I have made this E-commerce Website to show my understanding of Different Tool&apos;s and Frameworks in the Web Development Industry. This Website use&apos;s <Link href='https://nextjs.org/' target='_blank' className={styles.techColor}>Next.js</Link> for the frontend development with <Link href='https://tailwindcss.com/' className={styles.techColor} target='_blank'>Tailwind CSS</Link> for styling. For the backend I have chose to use <Link href='https://www.python.org/' className={styles.techColor} target='_blank'>Python</Link> with addition to <Link href='https://flask.palletsprojects.com/en/3.0.x/' className={styles.techColor} target='_blank'>Flask. </Link>These frameworks and tools are just some of what I have used to make this site. Full documentation can be found at <Link href='https://github.com/KabeerH/e-commerce-Website' className={styles.git} target='_blank'>GitHub.</Link></p> 
                         <p class='mt-12 mb-1 text-gray-600 text-lg'>In addition to my academic pursuits, I am an avid learner who constantly seeks out new challenges and opportunities for growth. My journey in web development has been marked by a deep commitment to mastering the craft, and this website is a testament to that journey. Any Feedback you provide will be the up most helpful. You can send any problems or bugs you encounter in the <Link href='/contact' className={styles.git}>Contact Page.</Link></p>
                    </div>
                    <div>
                        <img style={{borderRadius: '10px'}} class='h-auto' src='/about.png' ></img>
                    </div>
                </div>
            </div>
        </section>

    </>
    )
}