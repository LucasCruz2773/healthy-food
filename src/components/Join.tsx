import { Input } from './Input';
import { Button } from './Button';

import '../styles/join.css'

import JoinImg from '../assets/images/bloco_final_image.svg';

export function Join() {
    return (
        <div className="join-body">
            <div className="join-content">
                <div className="join-member">
                    <h1>Join our membership to get special offer</h1>
                    <div className="join-email">
                        <Input type="text" placeholder="Enter your email address" />
                        <Button style={{marginLeft: '1em'}}>Join</Button>     
                    </div>
                </div>
            </div>
            <aside className="join-image-content">
                <img src={JoinImg} alt="" />
            </aside>
        </div>
    )
}