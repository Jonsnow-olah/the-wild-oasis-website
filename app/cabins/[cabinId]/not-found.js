import Link from "next/link";

function NotFound() {
    return (
      <main className='text-center space-y-6 mt-4'>
        <h1 className='text-3xl font-semibold'>
          This cabin could not be found :(
        </h1>
        <Link
          href='/cabins'
          className='inline-block bg-colors-accent-500 text-colors-primary-800 px-6 py-3 text-lg'
        >
          Back to all cabins
        </Link>
      </main>
    );
  }
  
  export default NotFound;