import Ember from 'ember';

export function libravatarSrc(params, options) {
    let src = '//cdn.libravatar.org/avatar/' + md5(options.email) + '?s=' + options.size + '&d=retro';

    return '<img src="'+src+'" class="libravatar-image">';
}

export default Ember.Helper.helper(libravatarSrc);
