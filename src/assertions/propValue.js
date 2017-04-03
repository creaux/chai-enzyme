export default function ref (props) {
    console.log('H', props);
    const { markup, arg1, sig } = props;
    this.assert(
        wrapper.prop(arg1[0]).indexOf(arg1[1]) > -1,
        () => 'expected ' + sig + ' to have propValue #{exp} but props were #{act} ' + markup(),
        () => 'expected ' + sig + ' not to have propValue #{exp} but props were #{act} ' + markup(),
        arg1,
    );
}
