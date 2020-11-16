import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { message, Carousel, CarouselItem } from 'element-ui';


Vue.use(Carousel).use(CarouselItem)


Vue.prototype.$message = message;

