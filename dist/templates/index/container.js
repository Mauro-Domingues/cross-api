export class CreateContainer {
    execute() {
        return `import './providers';

import { container } from 'tsyringe';
`;
    }
}
