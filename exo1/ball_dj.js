class Ball
{
    constructor(a,b,r,v){
        this.x=a;this.y=b;this.r=r;this.v=v;
        this.div=document.createElement('div')
        let body=document.getElementsByTagName('body')[0]

        this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        this.div.style.position='fixed'
        this.div.style.width=this.r+"px"
        this.div.style.height=this.r+"px"
        this.div.style.borderRadius='50%'
        
        body.appendChild(this.div)
        body.addEventListener('mousemove',function(event){
            ballon.update(event.clientX,event.clientY)
            ballon.show()
        })
        
        this.div.addEventListener('click',this.update)
        
        this.background()
        this.show()

    }

    background(){
        this.div.style.backgroundColor='rgba(200,200,200,0.5)'
        //this.div.style.background='radial-gradient(green,yellow,red)'
    }

    move()
    {
        this.x=this.v[0]+this.x
        this.y=this.v[1]+this.y
    }

    show()
    {
        console.log(this.x+' '+this.y+' ');
        this.div.style.left=this.x+"px"
        this.div.style.top=this.y+"px"
        //this.div.innerHTML=this.x+":"+this.y
      
    }
    hit_size()
    {
        if (this.x+this.r>this.w || this.x<0 )
        {
            this.v[0]=-this.v[0]
        }
        if (this.y+this.r>this.h || this.y<0 )
        {
            this.v[1]=-this.v[1]
        }

    }
    update(m_x,m_y)
    {
        this.x=m_x
        this.y=m_y
        
        console.log(m_x+" : "+m_y)
    }
}

/*code MDN*/
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
// fin code MDN 

let ballon=new Ball(10,12,10,[1,2])

let balls=[]

_w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
_h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


function make_ball()
{
    x=getRandomInt(Math.abs(_w-60))
    y=getRandomInt(Math.abs(_h-60))
    vx=getRandomInt(3)
    vy=getRandomInt(3)
    if (vx==0){
        vx=getRandomInt(3)
    }
    if (vy==0){
        vy=getRandomInt(3)
    }
   
    balls.push(new Ball(x,y,10,[vx,vy]))

}

for (var i=0;i<20;i++)
{
    make_ball()
}

document.getElementsByTagName("body")[0].addEventListener('click',function (){
    if (balls.length<30){

        make_ball()
    }
})
function main()
{
    ballon.hit_size()
    ballon.move()
    ballon.show()

    for (var i=0;i<balls.length;i++){
        balls[i].hit_size()
        balls[i].move()
        balls[i].show()
    
    }
    requestAnimationFrame(main,false)
}


main()


