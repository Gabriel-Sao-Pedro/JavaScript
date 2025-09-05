var video = []
video[0] = Array()
video[0]['titulo'] = 'Fullmetal Alchemist'
video[0]['categoria'] = 'anime'

function getVideo(video){
    try{
        console.log(video[1]['nome'])
    }
    catch(erro){
        tratarErro(erro)
        console.log('Agora sim podemos tratar esse erro')
        throw new Error('Houve um erro, mas não se preoucupe, estamos trabalhando nele agora!!')
    }
    finally{
        console.log('Sempre passa por aqui (try/catch)')
    }
    console.log('A aplicação não morreu')
}
getVideo(video)
function tratarErro(erro){
    console.log(erro)
}
