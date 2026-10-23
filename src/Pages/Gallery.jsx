import React from 'react'
import OurWork from './OurWork'

const Gallery = () => {
    return (
        <div>
            <section className="pt-16 px-6 text-center bg-white">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    Our Remodeling &amp; Renovation Project Gallery
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Kitchens, bathrooms, additions, roofing, siding and painting projects
                    completed by Park Interiors for homeowners across Chittenden County, Vermont.
                </p>
            </section>
            <OurWork />
        </div>
    )
}

export default Gallery
