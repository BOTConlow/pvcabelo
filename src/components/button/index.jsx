import { Content, Content2 } from "./styles";


export function Button(props) {

    const { title, desc, href } = props


    return (

        <div>
            <div style={{ color: '#fff' }}>
                {
                    title &&
                    <Content
                        style={{ flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <a href={href}>
                            <button>
                                {title}
                            </button>

                        {
                            desc && <h4><u>{desc}</u></h4>
                        }
                        </a>

                    </Content>
                }
            </div>
    </div>

    )
}

export function Button2(props) {

    const { title, desc, href } = props


    return (

        <div>
            <div style={{ color: '#fff' }}>
                {
                    title &&
                    <Content2
                        style={{ flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <a href={href}>
                            <button>
                                {title}
                            </button>

                        {
                            desc && <h4><u>{desc}</u></h4>
                        }
                        </a>

                    </Content2>
                }
            </div>
    </div>

    )
}