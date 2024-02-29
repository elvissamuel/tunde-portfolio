import React from 'react'
import projectImg from '@/images/photos/image-4.jpg'
import Image from 'next/image'

type Props = {}

const ProjectComponent = (props: Props) => {
  return (
    <div>
      <div className="flex h-[438px] flex-col gap-4">
        <Image
          src={projectImg}
          alt="prject-img"
          className="h-[273px] w-full rounded-xl object-cover"
        />
        <p>Project Name</p>
        <p>See live website</p>
        <p>
          Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Molestias aut repudiandae optio distinctio quisquam accusantium
          facilis necessitatibus quidem vel harum?
        </p>
      </div>
    </div>
  )
}

export default ProjectComponent
