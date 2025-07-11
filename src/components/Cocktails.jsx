import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {

    useGSAP(() => {
        const paralaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        paralaxTimeline.from('#c-left-leaf', {
            x: -100, y: 100
        }).from('#c-right-leaf', {
            x: 100, y: 100
        })
    }, [])    

  return (
    <section id='cocktails' className='noisy'>
        <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id='c-left-leaf' />
        <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id='c-right-leaf' />
    
        <div className='list'>
            <div className='popular'>
                <h2>Most popular cocktails:</h2>

                <ul>
                    {cocktailLists.map(val => (
                        <li key={val.name}>
                            <div className='md:me-28'>
                                <h3>{val.name}</h3>
                                <p>{val.country} | {val.detail}</p>
                            </div>
                            <span>- {val.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='loved'>
                <h2>Most loved mocktails:</h2>

                <ul>
                    {mockTailLists.map(val => (
                        <li key={val.name}>
                            <div className='me-28'>
                                <h3>{val.name}</h3>
                                <p>{val.country} | {val.detail}</p>
                            </div>
                            <span>- {val.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails