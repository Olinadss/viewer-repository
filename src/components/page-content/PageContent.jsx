import React, { useContext} from 'react'
import './pageContent.css'
import Context from '../context/Context';

export default function PageContent() {
  const ctx =  useContext(Context)
  console.log(ctx.userRepos);

  return (
    
    <div className='page'>
      <div className='page-content'>
        <section>
          <h1 className='title-h1'>{`Repositorio de ${ctx.userData.name}`}</h1>
          <section className='container-repo'>
            {ctx.userRepos.map((repo) => (
              <>
                <h3 className='title-h3'>{repo.name}</h3>
                <p>{repo.description}</p>
              </>
            ))}
          </section>
        </section>
      </div>
    </div>
  )
}
