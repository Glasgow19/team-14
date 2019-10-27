import React from 'react'
import HeroComponent from '../Shared/hero.section'
import  InfoPaper from '../Shared/InfoPaper'

const StoryDetailView = () => {

    let txt = `Aut ea ut placeat modi blanditiis totam consectetur. Perferendis dolor autem doloremque. Eveniet hic pariatur eos quisquam fugiat rem temporibus.
    Et laborum omnis aut perspiciatis in. Aut aut dignissimos error illum provident voluptatem quis inventore. Voluptatibus ea alias sequi quia. Ipsa tempora accusantium at animi placeat voluptatem ab blanditiis. Harum vel velit consequatur expedita soluta fugit.
    Sequi expedita officia totam voluptate illum labore qui distinctio. Veniam similique et et rerum porro fugit. Quis qui quia eius sint incidunt labore mollitia aut.
    Omnis ut minima quisquam assumenda dicta expedita aliquid aperiam. Reprehenderit fugiat non accusamus. Et beatae aut qui pariatur sit accusantium. Blanditiis inventore omnis asperiores aliquam iure minus labore. Eum autem reiciendis voluptatem saepe. A ad repudiandae blanditiis maiores sapiente ea.`

    return (
        <div>
            <HeroComponent text= "Ada Lovelace" img="https://cdn.history.com/sites/2/2015/12/Ada_Lovelace_portrait-E.jpeg" />
            <InfoPaper txt={txt} header="The first programmer" style={{marginBottom: 40}}/>
        </div>
    )
}

export default StoryDetailView
