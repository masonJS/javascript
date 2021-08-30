const project = {
  title: 'CodeA',
  members: ['one', 'two', 'three'],
  introA() {
    this.members.forEach(function(member){
      console.log(`${member} is ${this.title} project member`)
    })
  },
  introB() {
    this.members.forEach(member => {
      console.log(`${member} is ${this.title} project member`)
    })
  }
}

project.introA()

project.introB()
