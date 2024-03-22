import React from 'react'

const ProjectsDetails = ({selectedProject}) => {
    return (
        <>
        <div className='border-t-2 font-sans border-sky-700 rounded-2xl p-2 sm:p-5 shadow-2xl'>
            <h1 className='uppercase pb-1 sm:px-2 rounded-lg font-semibold text-lg sm:text-2xl mb-3 border-b-2 border-sky-900 w-fit'>{selectedProject.title}</h1>

            <p className='sm:pr-5 pb-5 sm:text-justify sm:leading-7 sm:text-lg'>
                {selectedProject.title} {selectedProject.desc}
            </p>
        <div className="flex flex-wrap justify-around space-y-2 sm:space-y-0  items-center sm:space-x-4">
           {
               selectedProject.viewSite ?
               <a target='_blank' className='bg-sky-700 text-white px-2 py-1 rounded-md' href={selectedProject.viewSite}><i className='fa fa-eye'></i> View Site</a> : null 
            }
           {
               selectedProject.youtube ?
               <a target='_blank' className='bg-sky-700 text-white px-2 py-1 rounded-md' href={selectedProject.youtube}><i className='fa fa-youtube-play'></i> Youtube</a> : null 
            }
           {
               selectedProject.repo ?
               <a target='_blank' className='bg-sky-700 text-white px-2 py-1 rounded-md' href={selectedProject.repo}> <i className='fa fa-github'></i> Repo</a> : null 
            }
            {
                selectedProject.stack.map((stack) => {
                    console.log(stack)
                   return (
                    <div key={stack}>
                        <img src={'/'+stack+'.svg'} className='h-10'></img>
                    </div>
                )
                })
            }
        </div>
            </div>
        </>


    )
}

export default ProjectsDetails