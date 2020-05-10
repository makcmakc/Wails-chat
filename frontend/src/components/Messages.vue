<template>
	<div class="conversation">
		<div class="container">

    <!--<div class="message__day">
      <span>{{ time | moment("Do MMMM") }}</span>
    </div>-->

    <div v-for="(msg, i) in messages" v-bind:key="i"> 
      <div class="message" :class="{received: msg.received}" @contextmenu.prevent="$refs.menu.open($event, { body: msg.content, time: msg.time, index: msg.id })">
      {{ msg.content }}
      <span class="metadata">
      <span class="time">{{ msg.time | moment("k:mm") }}</span>
      <span class="tick"><svg width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>
      </span>
      </span>						
      </div>	
    </div>


    <div class="recorded-audio">
      <div v-for="(record, index) in recordings" :key="index" class="recorded-item">
        <div class="message">
          <div class="player">
             <i class="material-icons play_pause_circle">play_circle_filled</i>
             <!--<i class="material-icons pause_circle">pause_circle_filled</i>-->
            <!--<div class="play_pause_btn">
              <i class="material-icons">play_arrow</i>
            </div>-->
             <av-waveform 
              :audio-src="record.src"
              :canv-width="120"
              :canv-height="30"
              :audio-controls="false"
              :playtime="false"
              :playtime-with-ms="false"
              :played-line-color="'#4fc3f7'"
              :noplayed-line-color="'#F1F1F1'"
              :canv-top="false"
              ></av-waveform>
              <span class="timing">00:00 / 00:25</span>
          </div>
        </div>
      </div>
    </div>

<!--
     <div class="recorded-audio">
      <div class="message">

        <div class="player">
          <div class="player-track">
            <div class="music-name"></div>

            <div class="progress" ref="progress">

              <div class="progress__top">
                <div class="album-info">
                  <div class="album-info__name"></div>
                  <div class="album-info__track"></div>
                </div>
                <div class="progress__duration"></div>
              </div>

              <div class="progress__bar" >
                <div class="progress__current"></div>
              </div>

              <div class="progress__time"></div>
            </div>

          </div>
        </div>   

      </div>
     </div>

-->

		<v-dialog />

    <vue-context ref="menu">
      <template slot-scope="msg">
				<li><a href="#" v-on:click.prevent="reply(msg.data)">Ответить</a>	</li>
				<li><a href="#" v-on:click.prevent="copyText(msg.data.body)">Копировать текст</a></li>
				<li><a href="#" v-on:click.prevent="forwardMessage(msg.data.body)">Переслать сообщение</a></li>
				<li><a href="#" v-on:click.prevent="confirmDelete(msg.data.index)">Удалить сообщение</a></li>
				<li><a href="#" v-on:click.prevent="highlightMessage(msg)">Выделить сообщение</a></li>
      </template>
    </vue-context>	
    </div>

	</div>
</template>


<script>
	import VueContext from 'vue-context'

	export default {
    name: 'messages',
    data() {
      return {
        currentTrack: null,
        currentTrackIndex: 0,
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false 
      }
    },
		props: ['messages', 'recordings'],
		components: {
			VueContext 
		},
		methods: {
			confirmDelete() {
				this.$modal.show('dialog', {
				text: 'Удалить это сообщение?',
					buttons: [
						{
							title: 'Отмена'
						},
						{
							title: 'Удалить',
							handler: (id) => {
								//this.$emit('delete-message', id)
                this.$delete(this.messages, id)
                this.$modal.hide('dialog')
							}
						}
					]
				})
			},
			async copyText(text) {
        try {
          const toCopy = text || location.href
          await navigator.clipboard.writeText(toCopy)
        }
        catch (err) {
          //console.error('Failed to copy: ', err)
        }      
      },
      reply() {},
      forwardMessage() {},
      highlightMessage() {},

    }
/*      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };

      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }  
		}*/
	};
</script>


<style>
@import '~vue-context/dist/css/vue-context.css';
</style>