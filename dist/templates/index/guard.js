"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateGuard = void 0;
class CreateGuard {
  execute() {
    return `/* eslint-disable no-useless-escape */
import { Router } from 'express';
import ensureAuthenticated from '@middlewares/EnsureAuthenticated';
import decodeJwt from '@middlewares/DecodeJwt';

interface IExceptionDTO {
  path: {
    /**
     * @example
     * All urls starts with '/^\\/' to match.
     * Example: /^\\//
     * Matches: '/'
     * @example
     * Prefix + Put the route to match it.
     * Example: /^\\/example/
     * Matches: '/example'
     * @example
     * '\\/' to match more '/' after the main route to specify a sub route.
     * Example: /^\\/example\\/sub-route/
     * Matches: '/example/sub-route'
     * @example
     * '.*' to match all after something.
     * Example: /^\\/example\\/.* /
     * Matches: '/example/anything' and '/example/literally-anything'
     * @example
     * '.+' to match all after something except the prefix.
     * Example: /example\\/.+
     * Matches: '/example/anything' but not '/example/' by itself
     * @example
     * '([\\/?].*)' matches all after '/' or '?' in a route.
     * Example: /example([\\/?].*)/
     * Matches: '/example/123' and 'example?page=1'
     * @example
     * '([\\/?].*)' + '?' matches all after '/' or '?' in a route and the route by itself
     * Example: /example([\\/?].*)?/
     * Matches: '/example/123' and 'example?page=1' and '/example' but not '/example-other-path'
     */
    url: RegExp;
    methods: ('GET' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS')[];
  }[];
}

const guardRouter = Router();

const exceptions: IExceptionDTO = {
  path: [
    {
      url: /^\\/example/,
      methods: ['GET'],
    },
    {
      url: /^\\/second-example\\/.+/,
      methods: ['GET', 'POST'],
    },
    {
      url: /^\\/third-example\\/.*/,
      methods: ['GET', 'POST', 'PUT'],
    },
    {
      url: /^\\/fourth-example([\\/?].*)/,
      methods: ['GET', 'POST', 'PUT', 'PATCH'],
    },
    {
      url: /^\\/last-example([\\/?].*)?/,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    },
  ],
};

guardRouter.use(ensureAuthenticated.unless(exceptions));
guardRouter.use(decodeJwt);

export default guardRouter;
`;
  }
}
exports.CreateGuard = CreateGuard;