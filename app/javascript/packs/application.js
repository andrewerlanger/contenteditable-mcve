import 'controllers'
import 'stylesheets/application.scss'
import 'channels'
import Rails from '@rails/ujs'
Rails.start()

import debounced from "debounced";
debounced.initialize({ ...debounced.events, input: { wait: 1000 } });
