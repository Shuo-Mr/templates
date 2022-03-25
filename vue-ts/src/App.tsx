import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

export default defineComponent({
    name: 'App',

    render() {
        return (
            <div>
                <p>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </p>
                <RouterView></RouterView>
            </div>
        )
    }
})
