export default function ref ({ wrapper, markup, flag, arg1, arg2, sig }) {
    const actual = wrapper.prop();

    this.assert(
        arg1.indexOf(arg2) > -1,
        () => 'expected ' + sig + ' to have propValue #{exp} but props were #{act} ' + markup(),
        () => 'expected ' + sig + ' not to have propValue #{exp} but props were #{act} ' + markup(),
        arg1,
        Object.keys(actual)
    );
}
