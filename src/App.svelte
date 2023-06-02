<script lang="ts">
  import { onMount } from 'svelte';

let mainVisible = false;
let whatAmIDoing = ""
function addWhatAmIDoing() {
  
}
onMount(() => {
  const mainElement = document.querySelector('main');
  const screenPosition = window.innerHeight / 1.3;

  const handleScroll = () => {
    const mainPosition = mainElement.getBoundingClientRect().top;
    if (mainPosition < screenPosition) {
      mainVisible = true;
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});
</script>


<main class="background-design visible">
  <div class="content">
    <h1 class="title_david">WELCOME TO DAVIDISM.NET</h1>
    <p>Welcome to my amazing website. This website is where I put all my fun toys, coding projects, AI terminators, ways to do even less at school, world domination plans, eat flesh, and many, many more things. Enjoy :D</p>
    <input placeholder="What else am I doing?" type="text" bind:value={whatAmIDoing}>
    <button on:click={addWhatAmIDoing}>ADD</button>
    <div class="box-container">
      <div class="box">
        <a href="#">Box 1</a>
      </div>
      <div class="box">
        <a href="#">Box 2</a>
      </div>
      <div class="box">
        <a href="#">Box 3</a>
      </div>
      <div class="box">
        <a href="#">Box 4</a>
      </div>
    </div>
  </div>
</main>

<style>


/* main {
  padding: 40px;
  text-align: center;
  /* opacity: 1; */
  /* transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  background: linear-gradient(to bottom,orange, gold);
} 
*/
.title_david {
  font-style: italic;
  margin: 5vh;
  font-size: 5rem;
}
main {
  background-color: black;
  background-image: linear-gradient(to bottom right, gold, orange);
  padding: 0;
  text-align: center;
  opacity: 1;

  transition: opacity 0.5s ease;
  animation: startin .6s ease;

}
@keyframes startin {
  0% {
    transform:rotateX(90deg) scaleX(0.2);
   
  }
  100% {
    transform: rotateX(0deg);
    
  }
}

.vis {
  opacity: 1;
  transform: none;
}


p {
  font-size: 18px;
  line-height: 1.5;
}

.box-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
}

.box {
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: orange;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-color 0.3s ease;
}

.box:hover {
  background-color: gold;
  cursor: pointer;
}

.box a {
  color: black;
  text-decoration: none;
  font-size: 20px;
}
</style>
