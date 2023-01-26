import React from 'react'

export const Geners = ({handleClick}) => {


  return (
    <div className='geners-section'>
        <h1 className='title'>Movie Search app</h1>
        <h2>Geners</h2>
        <nav className='navbar'>
            <ul className='navbar-list' tabIndex='10'>
            <li 
                className='navbar-item saved-item' id='saved' 
                onClick={handleClick} tabIndex='0'>
                    Check Saved Items
                </li>
                <li 
                className='navbar-item' 
                id='all'
                onClick={handleClick}
                tabIndex='1'
                >
                    All
                </li>

                <li 
                className='navbar-item' 
                id='action'
                onClick={handleClick}
                tabIndex='2'>
                    Action
                </li>

                <li 
                className='navbar-item' id='crime' 
                onClick={handleClick}
                tabIndex='3'>
                    Crime
                </li>

                <li 
                className='navbar-item' id='drama'
                onClick={handleClick}
                tabIndex='4'>
                    Drama
                </li>

                <li 
                className='navbar-item' id='mystery' 
                onClick={handleClick}
                tabIndex='5'>
                     Mystery
                </li>

                <li 
                className='navbar-item' id='scifi' 
                onClick={handleClick}
                tabIndex='6'>
                     Scifi
                </li>

                <li 
                className='navbar-item' id='adventure' 
                onClick={handleClick}
                tabIndex='7'>
                    Adventure
                </li>


            </ul>
        </nav>
    </div>
  )
}
