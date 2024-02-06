import React from 'react'

const offerlist = () => {
    return (
        <div>
            <h1>Customer Offer List</h1>

            <div class="container">
                <div class="row">
                    <div class="col"></div>
                    <div class="col">
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-mdb-toggle="dropdown" aria-expanded="false">
                                Checkbox dropdown
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="Checkme1" />
                                            <label class="form-check-label" for="Checkme1">Check me</label>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="Checkme2" checked />
                                            <label class="form-check-label" for="Checkme2">Check me</label>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="Checkme3" />
                                            <label class="form-check-label" for="Checkme3">Check me</label>
                                        </div>
                                    </a>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="Checkme4" checked />
                                            <label class="form-check-label" for="Checkme4">Check me</label>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-group">
                            <div class="form-outline" data-mdb-input-init>
                                <input type="search" id="form1" class="form-control" />
                                <label class="form-label" for="form1">Search by property name</label>
                            </div>
                            <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Property Name</th>
                            <th>Customer Name</th>
                            <th>Offer Price</th>
                            <th>Status</th>
                            <th>Accept/reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>P1</td>
                            <td>Customer1</td>
                            <td>$1000</td>
                            <td>Pending</td>
                            <td>
                                <button type="button" class="btn btn-secondary btn-sm">Accept</button>
                                <button type="button" class="btn btn-danger btn-sm">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <td>P2</td>
                            <td>Customer2</td>
                            <td>$1500</td>
                            <td>Pending</td>
                            <td>
                                <button type="button" class="btn btn-secondary btn-sm">Accept</button>
                                <button type="button" class="btn btn-danger btn-sm">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <td>P3</td>
                            <td>Customer3</td>
                            <td>$3000</td>
                            <td>Pending</td>
                            <td>
                                <button type="button" class="btn btn-secondary btn-sm">Accept</button>
                                <button type="button" class="btn btn-danger btn-sm">Reject</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default offerlist