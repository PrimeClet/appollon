<template >
  <div class="bg-transparent rounded-3">
    <div class="card mb-3 p-3 rounded-3 bg-transparent" v-if="component_data.length == 1">
      <div class="card-body p-1" v-for="(data, $index) in component_data" :key="$index">

        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex flex-row justify-content-between align-items-center" >
            <img src="~assets/images/picDef.png" alt="" class="" height="40px" v-if="data.picture === null "/>
            <img :src="`https://odaaay.com/api/static/files/${data.picture}`" alt="" height="40px" class="rounded-circle" v-else/>
            <nuxt-link to="#" v-on:click.native="getOtherUser(data.uuid, data.username)" v-if="data.username != Usetting.username">
              <span class="h6 text-base ms-xl-1 pt-1">
                {{ data.username }}
              </span>
            </nuxt-link>
            <nuxt-link :to="`/${$i18n.locale}/profile`" v-else>
              <span class="h6 text-base ms-xl-1 pt-1">
                {{ data.username }}
              </span>
            </nuxt-link>
          </div>
          <div >
            <button class="rounded border-0 py-1 px-3 btn-primary d-block btn-sm" @click="followHim(data.uuid, $event)" v-if="data.username != Usetting.username">
              {{ $t('pages.profile.follow') }}
            </button>
            <!-- <button class="rounded border-0 py-1 px-3 btn-primary d-none" @click="unfollowHim(data.uuid, $event)" v-if="data.username != Usetting.username">
              Unfollow
            </button> -->
            <button class="rounded border-0 py-1 px-2 btn-primary btn-sm" @click="seeProfile" v-else>
              <i class="fas fa-eye text-white"></i>
            </button>
          </div>

        </div>
        <p class=" text-base mt-3 p-0 text-15 mb-0 text-left" v-if="!data.bio">
        </p>
        <p class=" text-base mt-3 text-15 mb-0 text-left" v-else>
          <truncate class="truncate-less" clamp="..." :length="150" less="Show Less" :text="data.bio"></truncate>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapState} from "vuex";
import truncate from 'vue-truncate-collapsed';

export default {
  props: ["component_data"],
  data() {
    return {
    };
  },
  components: {
    truncate
  },
  computed: {
    ...mapState(['Usetting']),
    ...mapGetters({
      LogIn: 'loggedIn',
      Usetting: 'Usettings'
    }),
  },
  methods: {
    seeProfile(){
     this.$router.push('/' + this.$i18n.locale + '/profile')
    },
    getOtherUser(uuid, name) {
      if(this.LogIn) {
        this.$store.commit('PUT_OTHERUSERDATA', uuid)
        this.$router.push('/' + this.$i18n.locale + '/profile?username=' + name)
      } else {
        this.$router.push('/' + this.$i18n.locale + '/login')
      }
    },
    followHim(uuid, event){
      if (this.LogIn){
        this.$axios
          .post('/user/following', {
            uuid: uuid
          },{
            headers: {
              'API-KEY': this.$store.state.token
            }
          })
          .then((response) => {
            if(response.data.status === 1){
              event.target.classList.remove('d-block')
              event.target.classList.add('d-none')
              event.target.nextElementSibling.classList.remove('d-none')
              event.target.nextElementSibling.classList.add('d-block')
              this.$notification.new(this.$t('pages.home.friendDone')+"💕", {
                timer: 15,
                position: 'bottomRight',
                type: 'success',
                showLeftIcn: true,
                showCloseIcn: true
              });
            }
            if(response.data.status === 0){
              this.$notification.new(this.$t('pages.home.paidAcc'), {
                timer: 15,
                position: 'bottomRight',
                type: 'success',
                showLeftIcn: true,
                showCloseIcn: true
              });
              this.subscribeToPost('subs', response.data.uuid)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.$notification.new(this.$t('pages.home.followAcc'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
    },

    subscribeToPost(tipe, uuids){
      this.$axios
        .post('/buy', {
          type: tipe,
          uuid: uuids,
          post_uuid: this.$route.params.slug,
          lang: this.$i18n.locale,
        },{
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          if (response.data.status === 1) {
            this.$notification.new(this.$t('pages.home.paidAccont'), {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
            window.open(response.data.link, '_blank');
          }
          if (response.data.status === 2) {
            this.$notification.new(this.$t('pages.home.alreadPaid'), {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    unFollowHim(uuid, event){
      if (this.LogIn) {
        this.$axios
          .delete('/user/following',
            {
              headers: {
                'API-KEY': this.$store.state.token
              },
              data: {
                uuid: uuid,
              },
            })
          .then((response) => {
            event.target.classList.remove('d-block')
            event.target.classList.add('d-none')
            event.target.nextElementSibling.classList.remove('d-none')
            event.target.nextElementSibling.classList.add('d-block')
            if( response.data.status === 1 ){
              this.$notification.new(this.$t('pages.home.heartBreak'), {
                timer: 15,
                position: 'bottomRight',
                type: 'error',
                showLeftIcn: true,
                showCloseIcn: true
              });
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.$notification.new(this.$t('pages.home.loginFirst'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
    }
  },
};
</script>
